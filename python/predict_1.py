import streamlit as st
import numpy as np
import pandas as pd
import pickle
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt
import matplotlib as mpl
def predict_1():
    st.title("Prediction")
    pickle_in = open('classifier.pkl', 'rb') 
    classifier = pickle.load(pickle_in)
    datafile = st.file_uploader("Upload data for Prediction",type=['csv'])
    if datafile is not None:
        try:
            df = pd.read_csv(datafile)
            df = df.drop(['Unnamed: 0'],axis=1)
            for column in df.columns:
                if df[column].dtype==np.number:
                    continue
                else:
                    df[column]=LabelEncoder().fit_transform(df[column])
            prediction  = classifier.predict(df)
            df["Attrition"] = prediction
            st.dataframe(df)
            importances = pd.DataFrame({'feature':df.iloc[:, 0:df.shape[1]-1].columns,'importance':np.round(classifier.feature_importances_,3)}) #Note: The target column is at position N
            importances = importances.sort_values('importance',ascending=False).set_index('feature')
            st.bar_chart(importances)
            st.subheader("Predicted Attrition")
            df[df["Attrition"]==0]='No'
            df[df["Attrition"]==1]='Yes'
            attrition_count = pd.DataFrame(df['Attrition'].value_counts())/len(df) 
            st.bar_chart(attrition_count)
        except:
            st.warning("File contents are not supported!!")
