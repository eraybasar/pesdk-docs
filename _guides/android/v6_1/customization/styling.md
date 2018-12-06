---
layout: guides/content
title: &title Styling # title as shown in the menu and

menuitem: *title
order: 0
platform: android
version: v6_1
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


It's easy to customize the PhotoEditor Android SDK's style.
​All resource and style identifier can be overwritten. They have the prefix: `imgly_` e.g. `Imgly.`
​
### Download the Default Layout as Reference
For an easy creation of a new interface design simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder.

### Prepare your Project
Copy and paste the downloaded files (only the files, not the folder) into the res folder of your own app module.

Open your project in Android Studio:

![Res Folder]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_res_files.png){: width="400px"}

### Change default icons

You can add your own icons:

![Icon size]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_icon_size.png){: width="400px"}

Please make sure, that you overwrite the icon in all densities.

* Put a 48x48px icon file into the drawable-mdpi folder (1.0x baseline) for medium-density
* Put a 72x72px icon file into the drawable-hdpi folder \(1.5x) for high-density
* Put a 96x96px icon file into the drawable-xhdpi folder (2.0x) for extra-high-density
* Put a 180x180px icon file into the drawable-xxhdpi folder (3.0x) for extra-extra-high-density
* Put a 192x192px icon file into the drawable-xxxhdpi folder (4.0x) for extra-extra-extra-high-density


There are two special files inside this project: `imgly_icon_option_selected_color.png` and `imgly_icon_option_selected_color_bg.png`.
Both combined will create an icon which will be used for both the fore- and background colorpicking for the sticker.

The white color values from `imgly_icon_option_selected_color.png` replace and overlays the content from `imgly_icon_option_selected_color_bg.png` with the chosen color within the runtime.


### Change default colors

Open the res/values/imgly_color.xml in your project and edit the specific ARGB Hex value or double tap the color rect on the left side of the line to open the color picker

![Colors]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_colors.png){: width="600px"}

### Change Layout

If you want to change the order of the ActionBar Buttons, you can open the `imgly_widget_actionbar.xml` in the layout editor and simply change the order of the xml elements.

> __Warning:__ Do NOT change layout IDs or element types (extensions of a type are fine), otherwise the app will crash with a `NullPointer` or a `TypeCast` exception!

If you want to change the ActionBar Button Style go to the specific Element, hold down the Command Key and click on the style attribute value `@style/Imgly.Editor.Header.Button.AcceptButton`
The Editor now jumps in the specific Style element in the `imgly_style.xml` file.
Now you can edit all style attributes. It's also possible to override the style attributes directly in the element node.

![Edit style]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_edit_style.png){: width="800px"}

### Custom view example

If you want to change a view or you want to adjust the behavior of a view, you don't need to be afraid. Our event system gives you the opportunity to customize any interactive element with ease.
First, create a new class that extends the desired view type. For interactive views like buttons, you have to implement the `OnClickListener` and set it to `setOnClickListener(this)` at the beginning.
To get the status of the menu you need the `StateHandler`. You can access it as in the following example.
Now you can write your own method that responds to the event calls. All events are listed in `PESDKEvents`. For example, event tags that belong to the state of the UI all start with `UiStateMenu_`.
You also need a second class to replace the old view and modify its behavior. In this case, it is similar to the first class, but you have to reverse the visibility.
The following example shows you how to create a new export button instead of the small button in the action bar.

```java
public class ExampleCustomExportButton extends Button implements View.OnClickListener {

    private UiStateMenu settings;

    public ExampleCustomExportButton(Context context) {
        super(context);
        init();
    }

    public ExampleCustomExportButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public ExampleCustomExportButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        setText("Export Button");
        setOnClickListener(this);
    }

    @MainThread
    @OnEvent(value = {
      PESDKEvents.UiStateMenu_ENTER_TOOL,
      PESDKEvents.UiStateMenu_LEAVE_TOOL,
      PESDKEvents.UiStateMenu_LEAVE_AND_REVERT_TOOL
    }, triggerDelay = 30)
    protected void onToolChanged() {
        AbstractToolPanel currentTool = settings != null ? settings.getCurrentTool() : null;
        if (currentTool != null && currentTool.isAttached()) {
            setVisibility(currentTool.isAcceptable() ? View.VISIBLE : View.GONE);
            if (UiStateMenu.MAIN_TOOL_ID.equals(settings.getCurrentPanelData().getId())) {
                setVisibility(View.VISIBLE);
            } else {
                setVisibility(View.INVISIBLE);
            }
        }
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        try {
            StateHandler stateHandler = StateHandler.findInViewContext(getContext());
            stateHandler.registerSettingsEventListener(this);
            settings = stateHandler.getStateModel(UiStateMenu.class);
        } catch (StateHandler.StateHandlerNotFoundException ignored) {
            ignored.printStackTrace();
        }
    }


    @Override
    public void onClick(View view) {
        settings.notifySaveClicked();
    }
}
```

Now you need to change the type of view in the `imgly_widget_actionbar.xml` from `AcceptButton` to the name of your class. Then you have to add the new button in the file `imgly_activity_photo_editor.xml` to display it in the editor.
Here are examples of what it can look like.

```xml
<?xml version="1.0" encoding="utf-8"?>
<ly.img.android.pesdk.ui.widgets.EditorRootView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/rootView"
    style="@style/Imgly.PESDK.Editor.Activity">
    <ly.img.android.pesdk.backend.views.EditorPreview
        android:id="@+id/editorImageView"
        style="@style/Imgly.PESDK.Editor.Activity.Preview"/>
    <ly.img.android.pesdk.ui.widgets.ProgressView
        style="@style/Imgly.PESDK.Editor.Activity.Progress"/>
    <ly.img.android.pesdk.ui.widgets.ToolContainer
        android:id="@+id/toolPanelContainer"
        style="@style/Imgly.PESDK.Editor.Activity.ToolPanelContainer"/>
    <ly.img.android.pesdk.ui.widgets.ImgLyTitleBar
        android:id="@+id/imglyActionBar"
        style="@style/Imgly.PESDK.Editor.Activity.ActionBar"/>
    <ly.img.android.pesdk.ui.widgets.buttons.ExampleCustomExportButton
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerHorizontal="true"/>
</ly.img.android.pesdk.ui.widgets.EditorRootView>
```


### Declaring layout guides

For more information look at the [Google Developer Guides]( http://developer.android.com/guide/topics/ui/declaring-layout.html).

### See an example

You can find a finished example with a customized design in our {% include guides/android/demo-repository.md %}. Just take a look at the `CustomizeLayoutExample` folder.
