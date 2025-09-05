from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/photos/', include('photos.urls')),
    path('api/events/', include('events.urls')),
    path('api/orders/', include('orders.urls')),
]
