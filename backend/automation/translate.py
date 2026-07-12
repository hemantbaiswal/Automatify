from deep_translator import GoogleTranslator

def translate_text(text, destination="hi"):
    try:
        translated = GoogleTranslator(
            source="auto",
            target=destination
        ).translate(text)

        return translated

    except Exception as e:
        return str(e)