from flask import request
import pandas as pd
import json
import numpy
import re
import pickle
import joblib

data = pd.read_csv('../data/dataset_relational.csv')

"""
Create routes
"""

def custom_encoder(col):
    return {
        'decoded' : data[str(col)].unique().tolist(),
        'encoded' : data[str(col)+'_ecoded'].unique().tolist()
    }

def create_routes(app):

    """
    Cars list
    """
    @app.route('/api/cars/params/list', methods=['GET'])
    def get_cars_list():
        # print(custom_encoder())
        return json.dumps({
            'model': custom_encoder('model'),
            'energie': custom_encoder('energie'),
            'boite': custom_encoder('boite'),
            'premiere_main': custom_encoder('premiere_main'),
        })

    """
    Predict route params
    """
    @app.route('/api/cars/predict', methods=['POST'])
    def predict():
        loaded_model = pickle.load(open('../notebooks/model', 'rb'))

        new_data = {
            'model':[350],
            'annee':[2019],
            'mise_en_circulation':[2019],
            'kilometrage':[63231],
            'energie':[2],
            'boite':[2],
            'nb_portes':[5],
            'nb_places':[5],
            'premiere_main':[0],
            'puissance':[130],
            'departement':[33],
        }

        X_predict = pd.DataFrame(new_data,
        columns = [
            'model',
            'annee',
            'mise_en_circulation',
            'kilometrage',
            'energie',
            'boite',
            'nb_portes',
            'nb_places',
            'premiere_main',
            'puissance',
            'departement',
        ])
        result = loaded_model.predict(X_predict)
        return str(result[0])