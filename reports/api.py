from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .serializers import ReportSerializer 
from .models import Report

class ReportViewSet(ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
