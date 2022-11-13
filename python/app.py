import pickle
from pathlib import Path

import streamlit as st  
import streamlit_authenticator as stauth

from apps import apps

st.set_page_config(page_title="Sales Dashboard", page_icon=":bar_chart:", layout="wide")


# --- USER AUTHENTICATION ---
names = ["Peter Parker", "Rebecca Miller"]
usernames = ["pparker", "rmiller"]
# load hashed passwords
file_path = Path(__file__).parent / "hashed_pw.pkl"
with file_path.open("rb") as file:
    hashed_passwords = pickle.load(file)

credentials = {
    "usernames":{
        usernames[0]:{
            "name":names[0],
            "password":hashed_passwords[0]
            },
        usernames[1]:{
            "name":names[1],
            "password":hashed_passwords[1]
            }            
        }
    }


authenticator = stauth.Authenticate(credentials, "app_home", "auth", cookie_expiry_days=30)

name, authentication_status, username = authenticator.login("Login", "main")

if authentication_status == False:
    st.error("Username/password is incorrect")

if authentication_status == None:
    st.warning("Please enter your username and password")

if authentication_status:
    # ---- SIDEBAR ----
    authenticator.logout("Logout", "sidebar")
    st.sidebar.title(f"Welcome {name}")
    apps()