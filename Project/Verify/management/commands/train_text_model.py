from django.core.management.base import BaseCommand
import pandas as pd
from sklearn.model_selection import train_test_split
import pickle
from sklearn.linear_model import LogisticRegressionCV
from sklearn.metrics import classification_report, accuracy_score

# utils 모듈에서 필요한 함수들을 가져옵니다.
from Verify.utils import load_data, preprocessor, get_tfidf_vectorizer


class Command(BaseCommand):
    help = 'Train the text classification model'

    def handle(self, *args, **kwargs):
        path = '../data/' # 변경 필요
        df = load_data(path)
        
        df['title_text'] = df['title_text'].apply(preprocessor)
        
        tfidf = get_tfidf_vectorizer()
        X = tfidf.fit_transform(df['title_text'])
        y = df['check'].values
        
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=0)
        
        clf = LogisticRegressionCV(cv=5, scoring='accuracy', random_state=0, n_jobs=1, verbose=3, max_iter=300).fit(X_train, y_train)

        y_pred = clf.predict(X_test)
        print("---Test Set Results---")
        print("Accuracy with logreg: {}".format(accuracy_score(y_test, y_pred)))
        print(classification_report(y_test, y_pred))

        # 모델을 pickle 파일로 저장
        with open('text_classifier_model.pkl', 'wb') as model_file:
            pickle.dump(clf, model_file)

        with open('tfidf_vectorizer.pkl', 'wb') as tfidf_file:
            pickle.dump(tfidf, tfidf_file)

        self.stdout.write(self.style.SUCCESS('Successfully trained the model'))