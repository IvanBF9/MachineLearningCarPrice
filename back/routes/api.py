from flask import request
import pandas as pd
import json
import numpy
import re
import pickle
import joblib

data = pd.read_csv('../data/dataset.csv')
data['price'] = data['price'].str.strip().str.extract(r'([0-9 ]+)')[0].str.replace(' ', '').astype('int')

"""
Create routes
"""
def create_routes(app):

    """
    Car list
    """
    # Arbo counters
    @app.route('/api/cars/list', methods=['GET'])
    def get_carlist():
        carlist = data['carmodel'].unique()
        numpyArray = numpy.array(carlist)
        df = pd.DataFrame(numpyArray, columns=['cars'])
        df.index += 1
        res = df['cars'].map(lambda x: x.lstrip().strip('\n'))
        return res.to_json()

    @app.route('/api/cars/predict', methods=['POST'])
    def predict():
        loaded_model = pickle.load(open('../notebook/model', 'rb'))

        new_data = {
            'carmodel' : [34],
            'miseencirculation': [2016],
            'kilometrage': [0.133091],
            'boîtedevitesse': [0.0],
            'color': [31.0],
            'car_type': [1.0],
            'puissancedin': [59]
        }

        X_predict = pd.DataFrame(new_data,
        columns = ['carmodel', 'miseencirculation', 'kilometrage', 'boîtedevitesse', 'color', 'car_type', 'puissancedin'])
        result = loaded_model.predict(X_predict)
        scaler = joblib.load('../notebook/scaler.save') 
        result = scaler.inverse_transform(result.reshape(-1, 1))
        return str(result[0][0])