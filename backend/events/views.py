from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event

@api_view(['GET'])
def event_list(request):
    qs = Event.objects.all()
    return Response([{ 'id': e.id, 'title': e.title } for e in qs])
