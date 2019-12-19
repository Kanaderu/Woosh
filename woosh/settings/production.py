from .base import *

DEBUG = False

try:
    from .local import *
except ImportError:
    pass

# define webpack
# https://github.com/owais/django-webpack-loader
WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'frontend/static/', # must end with '/'
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend', 'app', 'webpack-stats.json'),
    }
}