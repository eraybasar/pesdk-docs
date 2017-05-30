---
layout: guides/content
title: &title Events # title as shown in the menu and 
description: Understanding how users engage with a product is critical to every business. Learn how to track how your users interact with the PhotoEditor SDK for Android.
menuitem: *title
order: 0
platform: android
version: v4
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 
published: true # Either published or not 
---
# Events
The PhotoEditor SDK allows you to register an object that is being notified about events in real-time. You can then send these events to an analytics service of your choice.
To receive events you have to include our apt build processor into your application `build.gradle` file:
```groovy
...
apply plugin: 'com.neenbedankt.android-apt'
dependencies {
    compile 'ly.img.android:photo-editor-sdk:4.0.0'
    apt 'ly.img.android:build-processor:4.0.0'
    ...
}
...
```
Afterwards you have to create a custom class that extends from [`EventTracker`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/sdk/models/state/manager/EventTracker.html). 
This class has to be a [`Parcelable`](https://developer.android.com/reference/android/os/Parcelable.html) and must be annotated with `@ly.img.sdk.android.annotations.StateEvents`.

You have to create methods that are annotated with `@ly.img.sdk.android.annotations.OnEvent` for all events that you want to track. <br><br>

Here is an example:
(You will find all possible events in the ly.img.android.PESDKEvents class)
```java
@ly.img.sdk.android.annotations.StateEvents
public class CustomEventTracker extends EventTracker {
     
    /* 
     * This annotated method tracks any tool change like opening the brush tool
     */
    @ly.img.sdk.android.annotations.OnEvent(PESDKEvents.EditorMenuState_TOOL_STACK_CHANGED)
    protected void changeToolView(EditorMenuState menuState) {
        googleAnalyticsTracker.setScreenName(menuState.getCurrentTool().getName());
        googleAnalyticsTracker.send(new HitBuilders.ScreenViewBuilder().build());
    }
    /* 
     * This annotated method tracks contrast changes after a delay of 1000ms (triggerDelay) in order to prevent too many traking events.
     * ignoreReverts = true means that this event is not triggered again if you cancel the changes.
     */
    @ly.img.sdk.android.annotations.OnEvent(value = PESDKEvents.ColorAdjustmentSettings_CONTRAST, ignoreReverts = true, triggerDelay = 1000)
    protected void onColorAdjustmentChangeContrast(ColorAdjustmentSettings colorAdjustmentSettings) {
        HitBuilders.EventBuilder builder = new HitBuilders.EventBuilder()
                .setCategory("change color adjustment")
                .setLabel("contrast")
                .setAction("changed")
                .setValue(Math.round(colorAdjustmentSettings.getContrast() * 100));
        googleAnalyticsTracker.send(builder.build());
    }
    // Has to be a Parcalable. For example:
    private String trackerId;
    private Tracker googleAnalyticsTracker;
    private String trackerId;
    public CustomEventTracker(String trackerId) {
        init(trackerId);
    }
    private void init(String trackerId) {
        this.trackerId = trackerId;
        GoogleAnalytics analytics = GoogleAnalytics.getInstance(PESDK.getAppContext());
        googleAnalyticsTracker = analytics.newTracker(trackerId);
    }
    @Override
    public int describeContents() {
        return 0;
    }
    @Override
    public void writeToParcel(Parcel dest, int flags) {
        super.writeToParcel(dest, flags);
        dest.writeString(this.trackerId);
    }
    protected CustomEventTracker(Parcel in) {
        super(in);
        init(in.readString());
    }
    public static final Creator<CustomEventTracker> CREATOR = new Creator<CustomEventTracker>() {
        @Override
        public CustomEventTracker createFromParcel(Parcel source) {
            return new CustomEventTracker(source);
        }
        @Override
        public CustomEventTracker[] newArray(int size) {
            return new CustomEventTracker[size];
        }
    };
}
```
Now you have to add your `CustomEventTracker` and the build time created `your.package.PESDKEvents.class` to the settings class.<br>
*If this class does exist: do a "clean build" and a "rebuild" and after this the Build Processor will create these classes.*
```java
    settingsList.setEventProcessor(com.photoeditorsdk.android.app.http://0.0.0.0:5000/guides/android/v4/features/overlay.class);
    settingsList.setEventTracker(new CustomEventTracker(Application.ANALYTICS_TRACK_ID));
```
If you do not receive trackings, please verify that you have added `your.package.PESDKEvents` and not `ly.img.android.PESDKEvents`!
