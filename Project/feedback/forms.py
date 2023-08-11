from django import forms
from .models import feedback

class PostForm(forms.ModelForm):
    class Meta:
        model = feedback
        fields = ['feedback']