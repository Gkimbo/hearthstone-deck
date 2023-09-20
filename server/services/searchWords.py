def search_object(obj, search_words):
    results = []
    if isinstance(obj, dict):
        for key, value in obj.items():
            if any(word in key.lower() for word in search_words):
                results.append(value)
            elif isinstance(value, (dict, list)):
                results.extend(search_object(value, search_words))
    elif isinstance(obj, list):
        for item in obj:
            results.extend(search_object(item, search_words))
    return results
