import streamlit as st
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import plotly.express as px
from predict_1 import predict_1

def apps():
    st.title("Attrition Analysis")
    datafile = st.file_uploader("Upload dataset for Analysis",type=['csv'])
    c = st.container()
    if datafile is not None:
        try:
            df = pd.read_csv(datafile)
            attrition_count = pd.DataFrame(df['Attrition'].value_counts())
            input_col,fig_col,gender_col,dept_col,age_col,corr_col = c.tabs(["Attrition Count","Attrition Percentage","Gender-wise Analysis","Dept-Wise Analysis","Age-Wise Analysis","Correlation between attributes"])
            fig = plt.figure()
            sns.countplot(x = 'Attrition',data = df).set(title="Attrition Count")
            input_col.pyplot(fig)
            fig = px.pie(attrition_count,values='Attrition',title="Attrition Percentage")        
            fig_col.write(fig)
            attrition_dummies = pd.get_dummies(df['Attrition'])
            df = pd.concat([df, attrition_dummies] , axis = 1)
            fig = plt.figure()
            sns.barplot(x = 'Gender',y = 'Yes',data = df).set(title="Attrition Percentage")
            gender_col.pyplot(fig)
            sns.barplot(x = 'Department', y = 'Yes', data = df).set(title="Attrition Percentage")
            dept_col.pyplot(fig)
            sns.countplot(x='Age', hue='Attrition', data = df, palette="colorblind", edgecolor=sns.color_palette("dark", n_colors = 1))
            age_col.pyplot(fig)
            fig = plt.figure()
            sns.heatmap(df.corr())
            corr_col.pyplot(fig)
        except:
            st.warning("File contents are not supported!!")
    if(c.button("Predictions")):
        predict_1()

apps()