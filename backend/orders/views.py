from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Order

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def order_list(request):
    qs = Order.objects.filter(buyer=request.user)
    return Response([{ 'id': o.id, 'photo': o.photo.id, 'amount': str(o.amount) } for o in qs])
