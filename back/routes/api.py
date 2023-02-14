from flask import request
import pandas as pd
import json
import numpy

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
        print(carlist)
        numpyArray = numpy.array(carlist)
        res = pd.DataFrame(numpyArray, columns=['cars'])
        return res.to_json()
        #a = df['column name'].unique()