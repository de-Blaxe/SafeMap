'''
from django.conf.urls import url

from . import views
'''
from rest_framework.routers import DefaultRouter
from .api import ReportViewSet

router = DefaultRouter()
router.register('reports', ReportViewSet)

urlpatterns = router.urls
