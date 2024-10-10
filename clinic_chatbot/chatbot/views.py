from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import openai

@csrf_exempt
def chat_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_message = data.get('message')
        # Aqui você configura a API da OpenAI
        openai.api_key = 'SUA_API_KEY'
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}]
        )
        bot_response = response['choices'][0]['message']['content']
        return JsonResponse({'response': bot_response})

