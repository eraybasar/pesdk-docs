---
layout: guides/content
title: &title Events # title as shown in the menu and 
description: Understanding how users engage with a product is critical to every business. Learn how to track how your users interact with the PhotoEditor SDK for Android.
menuitem: *title
order: 0
platform: android
version: v6_4
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 
published: true # Either published or not 
---
The PhotoEditor SDK allows you to register an object that is being notified about events in real-time. You can then send these events to an analytics service of your choice.
To receive events, you have to create a custom class that extends from [`EventTracker`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/sdk/models/state/manager/EventTracker.html). 
This class has to be a [`Parcelable`](https://developer.android.com/reference/android/os/Parcelable.html) and must be annotated with `@ly.img.sdk.android.annotations.StateEvents`.

You have to create methods that are annotated with `@ly.img.sdk.android.annotations.OnEvent` for all events that you want to track. <br><br>

```
@OnEvent(
    value = {PESDKEvents.LayerListSettings_ADD_LAYER}, // Event name or names {...,...,...}, you will find all possible events in the your.package.PESDKEvents class, created after first compile with the sdk modules included in you project
    doInitCall = true, // If true (default), the event is call after register the tracker, if the event is called in meantime.
    ignoreReverts = true, // If false (default), the event is called also if the history has changed
    triggerDelay = 30 // If set to a value > 10 the event is triggered once X milliseconds after the last event call.
)
```

Here is an example:
The Kotlin code sample is currently unavailable due to restrictions by the Kotlin Annotation Processor (kapt).

```java
public class ExampleCustomEventTracker extends EventTracker {

    /*
     * This annotated method tracks any tool change like opening the brush tool
     */
    @OnEvent(ly.img.android.pesdk.ui.PESDKEvents.UiStateMenu_TOOL_STACK_CHANGED)
    protected void changeToolView(UiStateMenu menuState) {
        googleAnalyticsTracker.setScreenName(menuState.getCurrentTool().toString());
        googleAnalyticsTracker.send(new HitBuilders.ScreenViewBuilder().build());
    }
    /*
     * This annotated method tracks contrast changes after a delay of 1000ms (triggerDelay) in order to prevent too many traking events.
     * ignoreReverts = true means that this event is not triggered again if you cancel the changes.
     */
    @OnEvent(value = ly.img.android.pesdk.backend.adjustment.PESDKEvents.ColorAdjustmentSettings_CONTRAST, ignoreReverts = true, triggerDelay = 1000)
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
    public ExampleCustomEventTracker(String trackerId) {
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
    protected ExampleCustomEventTracker(Parcel in) {
        super(in);
        init(in.readString());
    }
    public static final Creator<ExampleCustomEventTracker> CREATOR = new Creator<ExampleCustomEventTracker>() {
        @Override
        public ExampleCustomEventTracker createFromParcel(Parcel source) {
            return new ExampleCustomEventTracker(source);
        }
        @Override
        public ExampleCustomEventTracker[] newArray(int size) {
            return new ExampleCustomEventTracker[size];
        }
    };

}
```

Now you have to add your `CustomEventTracker` to the settings class.<br>
```java
    settingsList.setEventTracker(new CustomEventTracker(Application.ANALYTICS_TRACK_ID));
```
