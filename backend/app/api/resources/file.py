from distutils import extension
import os
from os.path import exists
from urllib import response
from flask import jsonify, make_response, request, current_app, url_for, send_from_directory
from flask_restful import Resource
from http import HTTPStatus
from werkzeug.utils import secure_filename

from flask_jwt_extended import ( get_jwt_identity, jwt_required )

from sqlalchemy import true

from .. import api

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
	return '/' in filename and filename.rsplit('/', 1)[1].lower() in ALLOWED_EXTENSIONS


class Image(Resource):
    def post(self):
        file = request.files['file']
        if file and allowed_file(file.content_type):
            filename = secure_filename(file.filename)
            expandName = filename
            expand = 1
            path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
            
            while os.path.exists(path):
                expandName = filename.split(".")[0] + "(" + str(expand) + ")" + "." + filename.split(".")[1]
                path = os.path.join(current_app.config['UPLOAD_FOLDER'], expandName)
                expand += 1
            file.save(path)
            payload = {
            'message' : 'image stored',
            'filename'  : expandName
        }

        return make_response(payload, HTTPStatus.CREATED)

class Images(Resource):
    def get(self, filename):
        return send_from_directory(current_app.config["UPLOAD_FOLDER"], filename)

api.add_resource(Image, '/image')
api.add_resource(Images, '/images/<filename>')