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

        body = request.get_json()

        new_data = {
            'model':[body['model']],
            'annee':[body['annee']],
            'mise_en_circulation':[body['mise_en_circulation']],
            'kilometrage':[body['kilometrage']],
            'energie':[body['energie']],
            'boite':[body['boite']],
            'nb_portes':[body['nb_portes']],
            'nb_places':[body['nb_places']],
            'premiere_main':[body['premiere_main']],
            'puissance':[body['puissance']],
            'departement':[body['departement']],
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