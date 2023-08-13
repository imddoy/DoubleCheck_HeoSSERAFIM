import re
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

def load_data(path):
    fake_df = pd.read_csv(path +'Fake.csv')
    real_df = pd.read_csv(path +'True.csv')

    fake_df = fake_df[['title', 'text']]
    real_df = real_df[['title', 'text']]

    fake_df['check'] = 0
    real_df['check'] = 1
    df = pd.concat([fake_df, real_df], ignore_index=True, sort=False)
    
    df['title_text'] = df['title'] + ' ' + df['text']
    df.drop(['title', 'text'], axis=1, inplace=True)
    
    return df

def preprocessor(text):
    text = re.sub('<[^>]*>', '', text)
    text = re.sub(r'[^\w\s]','', text)
    text = text.lower()
    return text

def tokenizer_porter(text):
    porter = PorterStemmer()
    return [porter.stem(word) for word in text.split()]

def get_tfidf_vectorizer():
    return TfidfVectorizer(strip_accents=None,
                           lowercase=False,
                           preprocessor=None,
                           tokenizer=tokenizer_porter,
                           use_idf=True,
                           norm='l2',
                           smooth_idf=True)