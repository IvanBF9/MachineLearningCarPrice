from flask import request
import pandas as pd
import json
import numpy
import re
import pickle

data = pd.read_csv('../data/dataset.csv')

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

        data = {
            'carmodel' : [34],
            'miseencirculation': [2016],
            'kilometrage': [0.133091],
            'boîtedevitesse': [0.0],
            'color': [31.0],
            'car_type': [1.0],
            'puissancedin': [59]
        }

        X_predict = pd.DataFrame(data,
        columns = ['carmodel', 'miseencirculation', 'kilometrage', 'boîtedevitesse', 'color', 'car_type', 'puissancedin'])
        result = loaded_model.predict(X_predict)
        return str(result)