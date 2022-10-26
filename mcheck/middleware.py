from django.utils.deprecation import MiddlewareMixin


class CheckOrigin(MiddlewareMixin):

    def process_request(self, request):
        from pprint import pprint
        print("CORS_MIDDLEWARE_CHECK")
        pprint(request.__dict__)
