from django.http import JsonResponse

def index(request):
    return JsonResponse({
        "message": "Backend Running Successfully",
        "status": "ok"
    })