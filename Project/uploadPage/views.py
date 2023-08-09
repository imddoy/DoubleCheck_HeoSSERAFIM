from rest_framework.decorators import api_view
from rest_framework.response import Response
from .forms import PostForm
from .models import Post
from .serializers import PostSerializer

@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        form = PostForm(request.data)
        if form.is_valid():
            form.save()
            return Response({'message': 'Post created successfully'}, status=201)
        return Response(form.errors, status=400)
