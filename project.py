import streamlit as st
import datetime
import json
import pandas as pd

st.set_page_config(layout="wide")
st.title('Conference Room Booking System')

floors = ['1','2','3','4']

rooms = ['01','02','03','04']

inpFile = 'bookable.json'

def useResult(new_result):
    return new_result

def removeRoom(room_selectbox, new_result):
    new_result.append(room_selectbox)
    print("after booking this room -> " + room_selectbox + "the new_result is -> ", new_result)
    renderc2(new_result)

def renderc2(new_result):
    for i in useResult(new_result):
        c2.write(i+" was booked\n") 


# def produceResult(result,room_selectbox):
#     room_selectbox = c1.selectbox('Select which room', result)
#     return room_selectbox

room_details_size = [
    'The size of this room is 10000 sq. feet. ',
    'The size of this room is 11000 sq. feet. ',
    'The size of this room is 12000 feet. ',
    'The size of this room is 13000 feet. '
]

room_details_parts = [
    'This room has a 75inch TV that supports HDR content. This room is also air conditioned.',
    'This room has a 55inch TV and is water coolers for ventilation'
]
c1, c2 = st.columns([1,2])

floor_selectbox = c1.selectbox('Select which floor', floors)

indx = floors.index(floor_selectbox)

result = [floors[indx]+room for room in rooms]

room_selectbox = c1.selectbox('Select which room', result)

c1.date_input(
    "Select date in YYYY/MM/DD format :",
    datetime.datetime.now()
)

time1, time2= st.columns(2)
time1 = time1.time_input('Select the starting time : ', datetime.time(7,00))
time2 = time2.time_input('Select the ending time : ', datetime.time(8,00))

if (room_selectbox in ['101','201','301','401']):
    if c1.checkbox('Room details'):
        room_details_size[0]+room_details_parts[0]
elif (room_selectbox in ['102','202','302','402']):
    if c1.checkbox('Room details'):
        room_details_size[1]+room_details_parts[1]
elif (room_selectbox in ['103','203','303','403']):
    if c1.checkbox('Room details'):
        room_details_size[2]+room_details_parts[0]
elif (room_selectbox in ['104','204','304','404']):
    if c1.checkbox('Room details'):
        room_details_size[3]+room_details_parts[1]

new_result = []

def createbutton():
    butt = st.button('Book Room ' + room_selectbox)
    if butt:
        # removeRoom(room_selectbox,useResult(new_result))
        print(new_result)
        removeRoom(room_selectbox,useResult(new_result))

booked = []
    

createbutton()

c2.write('The booked details will come here')