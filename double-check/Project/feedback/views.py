from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import feedback
from .serializers import FeedbackSerializer

@api_view(['POST'])
def feedback_list(request):
    if request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Post created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
