from fastapi import FastAPI
from xgboost import XGBClassifier
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

LOAN_INTENT_GROUPS= {
    'DEBTCONSOLIDATION': 1,
    'EDUCATION': 2,
    'HOMEIMPROVEMENT': 3,
    'MEDICAL': 4,
    'PERSONAL': 5,
    'VENTURE': 6
}

PERSON_HOME_OWNERSHIP_GROUPS = {
    'MORTGAGE': 1,
    'OTHER': 2,
    'OWN': 3,
    'RENT': 4
}

LOAN_GRADE_GROUPS = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7
}

CB_PERSON_DEFAULT_ON_FILE_GROUPS = {
    'N': 1,
    'Y': 0
}

@app.get("/")
def read_root(
    age: str,
    person_income: str,
    person_home_ownership: str,
    person_emp_length: str,
    loan_intent: str,
    loan_grade: str,
    loan_amnt: str,
    loan_int_rate: str,
    loan_percent_income: str,
    cb_person_default_on_file: str,
    cb_preson_cred_hist_length: str
):
    print(age)
    print(person_income)
    print(person_home_ownership)
    print(person_emp_length)
    print(loan_intent)
    print(loan_grade)
    print(loan_amnt)
    print(loan_int_rate)
    print(loan_percent_income)
    print(cb_person_default_on_file)
    print(cb_preson_cred_hist_length)
    request = [[
        int(age),
        int(person_income),
        PERSON_HOME_OWNERSHIP_GROUPS.get(person_home_ownership),
        int(person_emp_length),
        LOAN_INTENT_GROUPS.get(loan_intent),
        LOAN_GRADE_GROUPS.get(loan_grade),
        int(loan_amnt),
        float(loan_int_rate),
        float(loan_percent_income)/100,
        CB_PERSON_DEFAULT_ON_FILE_GROUPS.get(cb_person_default_on_file),
        int(cb_preson_cred_hist_length)
    ]]
    training_model = XGBClassifier()
    training_model.load_model('xgb_training_model.json')
    prediction = training_model.predict(request)
    print('Prediction:')
    print(prediction)
    response = {'state': int(prediction[0])}
    return response