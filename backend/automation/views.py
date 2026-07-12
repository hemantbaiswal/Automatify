from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .ocr import extract_text

from .ocr import extract_text
from .translate import translate_text


def home(request):
    return JsonResponse({
        "message": "Welcome to Automatify API",
        "status": "Running"
    })

@api_view(["POST"])
def ocr(request):

    if "image" not in request.FILES:
        return Response({"error": "No image uploaded"}, status=400)

    image = request.FILES["image"]

    text = extract_text(image)

    return Response({
        "text": text
    })


@api_view(["POST"])
def ocr(request):

    image = request.FILES["image"]

    text = extract_text(image)

    return Response({"text": text})


@api_view(["POST"])
def translate(request):

    text = request.data.get("text")

    language = request.data.get("language", "hi")

    translated = translate_text(text, language)

    return Response({
        "translation": translated
    })