import os
basedir = os.path.abspath(os.path.dirname(__file__))

dbhost = 'localhost'
dbuser = 'lovro'
dbpass = ''
database = 'test_database'


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'mykey'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True

    SQLALCHEMY_DATABASE_URI =\
    'sqlite:///C:/Users/ADMIN/Desktop/projekt_web-backend-slike/kuharicaDB.db'

    #SQLALCHEMY_DATABASE_URI =\
    #'mysql+pymysql://{0}:{1}@{2}/{3}'.format(dbuser, dbpass, dbhost, database)

class TestingConfig(Config):
    pass

class ProductionConfig(Config):
    pass

config = {
'development': DevelopmentConfig,
'testing': TestingConfig,
'production': ProductionConfig,
'default': DevelopmentConfig
}