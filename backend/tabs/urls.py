from django.urls import path
from .views import TabListCreateView, TabDetailView

urlpatterns = [
    path('', TabListCreateView.as_view(), name='tab-list'),
    path('<int:pk>/', TabDetailView.as_view(), name='tab-detail'),
]
