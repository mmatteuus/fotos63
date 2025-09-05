from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Photo

@api_view(['GET'])
def photo_list(request):
    qs = Photo.objects.all()
    return Response([{ 'id': p.id, 'title': p.title, 'price': str(p.price) } for p in qs])
