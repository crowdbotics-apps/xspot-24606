from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    SettingViewSet,
    ProfileViewSet,
    InboxViewSet,
    DislikeViewSet,
    MatchViewSet,
    UserPhotoViewSet,
    LikeViewSet,
)

router = DefaultRouter()
router.register("setting", SettingViewSet)
router.register("dislike", DislikeViewSet)
router.register("userphoto", UserPhotoViewSet)
router.register("inbox", InboxViewSet)
router.register("match", MatchViewSet)
router.register("profile", ProfileViewSet)
router.register("like", LikeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
