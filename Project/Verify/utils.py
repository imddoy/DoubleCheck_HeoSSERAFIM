import re
import spacy
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem import WordNetLemmatizer

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')

# 데이터 로딩
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


# 전처리
def preprocessor(text):
    text = re.sub(r'\(.*?\)', '', text)
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub('-', '', text)
    text = re.sub(r'([.?!])\1+', r'\1', text)  # 여러 번 반복되는 문장 부호 제거
    text = text.lower()  # 모든 문자를 소문자로 변환
    return text

# Lemmatizer 초기화
lemmatizer = WordNetLemmatizer()
# Stopwords 초기화 (불필요한 단어 제거)
stop_words = set(stopwords.words('english'))



# 전처리와 토큰화
def preprocess_and_tokenize(text):

    sentences = sent_tokenize(text)
    text = re.sub(r'([.?!])\1+', r'\1', text)  
    # 모든 문자를 소문자로 변환
    text = text.lower()
    processed_sentences = []
    for sent in sentences:
        # 단어 토큰화
        words = word_tokenize(sent)
        
        # 소문자화
        words = [word.lower() for word in words]
        
        # 불필요한 단어 및 특수문자 제거
        words = [word for word in words if word.isalnum() and word not in stop_words]
        
        # Lemmatization (기본형으로 변환)
        words = [lemmatizer.lemmatize(word) for word in words]
        
        processed_sentences.append(' '.join(words))
    
    return ' '.join(processed_sentences)


# TF-IDF 벡터라이저 반환
def get_tfidf_vectorizer():
    return TfidfVectorizer(strip_accents=None,
                           lowercase=False,
                           preprocessor=None,
                           tokenizer=preprocess_and_tokenize,
                           use_idf=True,
                           norm='l2',
                           smooth_idf=True)

# 유튜브 스크립트 전처리
def preprocess_youtube_script(script_text):
    script_text = preprocess_and_tokenize(script_text)
    return script_text

# 문맥 기반 오류 검사
nlp = spacy.load("en_core_web_sm")

def context_checker(text):
    doc = nlp(text)
    errors = []
    for i, token in enumerate(doc[:-1]):
        if token.ent_type_ and doc[i+1].ent_type_ and not token.is_punct and not doc[i+1].is_punct:
            errors.append((token, doc[i+1]))

    for error in errors:
        print(f"Potential error: {error[0].text} {error[1].text}")

    return errors

def fix_context_errors(text, errors):
    corrected_text = text
    for error in errors:
        wrong_word = error[0].text
        correct_word = error[1].text  # Assume the second word is correct
        corrected_text = corrected_text.replace(wrong_word, correct_word, 1)

    return corrected_text

def process_and_check_script(script_text):
    cleaned_script = preprocess_youtube_script(script_text)
    context_errors = context_checker(cleaned_script)  # Get context errors
    corrected_script = fix_context_errors(cleaned_script, context_errors)  
    return corrected_script