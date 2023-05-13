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
    
    columns = ['model', 'externalColor', 'internalColor', 'brand', 'brand_origin', 'energy', 'gear_box', 'origin', 'technicalControl', 'firstHand', 'trunkVolumeRange', 'pollutionNorm', 'co2']
    """
    @app.route('/api/cars/params/list', methods=['GET'])
    def get_cars_list():
        # print(custom_encoder())
        return json.dumps({
            'model': custom_encoder('model'),
            'externalColor': custom_encoder('externalColor'),
            'internalColor': custom_encoder('internalColor'),
            'brand': custom_encoder('brand'),
            'brand_origin': custom_encoder('brand_origin'),
            'energy': custom_encoder('energy'),
            'gear_box': custom_encoder('gear_box'),
            'origin': custom_encoder('origin'),
            'technicalControl': custom_encoder('technicalControl'),
            'firstHand': custom_encoder('firstHand'),
            'trunkVolumeRange': custom_encoder('trunkVolumeRange'),
            'pollutionNorm': custom_encoder('pollutionNorm'),
            'co2': custom_encoder('co2'),
        })

    """
    Predict route params
    """
    @app.route('/api/cars/predict', methods=['POST'])
    def predict():
        loaded_model = pickle.load(open('../notebooks/model', 'rb'))

        body = request.get_json()
        print(body)

        new_data = {
            'model':[body['model']],
            'energy':[body['energy']],
            'gear_box':[body['gear_box']],
            'kilometers':[body['kilometers']],
            'year':[body['year']],
            'zip_code':[body['zip_code']],
            'cylinder':[body['cylinder']],
            'horsepower':[body['horsepower']],
            'origin':[body['origin']],
            'technicalControl':[body['technicalControl']],
            'firstHand':[body['firstHand']],
            'owners':[body['owners']],
            'externalColor':[body['externalColor']],
            'internalColor':[body['internalColor']],
            'doors':[body['doors']],
            'seats':[body['seats']],
            'length':[body['length']],
            'trunkVolumeRange':[body['trunkVolumeRange']],
            'ratedHorsePower':[body['ratedHorsePower']],
            'pollutionNorm':[body['pollutionNorm']],
            'critAir':[body['critAir']],
            'co2':[body['co2']],
            'brand':[body['brand']],
            'brand_origin':[body['brand_origin']],
        }

        X_predict = pd.DataFrame(new_data,
        columns = [
            'model',
            'energy',
            'gear_box',
            'kilometers',
            'year',
            'zip_code',
            'cylinder',
            'horsepower',
            'origin',
            'technicalControl',
            'firstHand',
            'owners',
            'externalColor',
            'internalColor',
            'doors',
            'seats',
            'length',
            'trunkVolumeRange',
            'ratedHorsePower',
            'pollutionNorm',
            'critAir',
            'co2',
            'brand',
            'brand_origin',
        ])
        result = loaded_model.predict(X_predict)
        return str(result[0])