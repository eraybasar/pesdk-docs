---
layout: guides/content
title: &title Interface # title as shown in the menu and

menuitem: *title
order: 1
platform: android
version: v6_5
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The user interface can be customized in various ways with increasing complexity.

### Theming

The default is a dark color theme but there is also a predefined light color theme which can be applied as follows:
If you do not have already done, create a resource values file (`res/values/imgly_color.xml`) in your project and copy these color values to override the default color set.
_Due to a limitation of Android 4, it is currently not possible to change the color theme at runtime, you need to add these colors at compile time._

```xml
<color name="imgly_transparent_color">#00000000</color>
<color name="imgly_background_color">#FFFFFFFF</color>
<color name="imgly_camera_header_background_color">#27000000</color>
<color name="imgly_camera_footer_background_color">#27000000</color>
<color name="imgly_highlight_color">#FF1B77FF</color>
<color name="imgly_icon_border_color_active">#FF1B77FF</color>
<color name="imgly_slider_track_color_progress">#FF1B77FF</color>
<color name="imgly_text_color">#FF000000</color>
<color name="imgly_editor_text_color">#FF000000</color>
<color name="imgly_camera_text_color">#FFFFFFFF</color>
<color name="imgly_text_color_active">#FF000000</color>
<color name="imgly_sprite_handle_thumb_color">#FFFFFFFF</color>
<color name="imgly_text_on_image_color">#FFFFFFFF</color>
<color name="imgly_icon_color_active">#FF000000</color>
<color name="imgly_shuffle_icon_color">#FF000000</color>
<color name="imgly_text_on_image_color_secondary">#99FFFFFF</color>
<color name="imgly_button_color">#00000000</color>
<color name="imgly_button_color_pressed">#FF203E61</color>
<color name="imgly_button_color_disabled">#CCCCCCCC</color>
<color name="imgly_icon_color">#CC000000</color>
<color name="imgly_editor_text_color_secondary">#99000000</color>
<color name="imgly_slider_thumb_color_disabled">#66000000</color>
<color name="imgly_icon_color_disabled">#66000000</color>
<color name="imgly_crop_icon_fill_color_active">#33000000</color>
<color name="imgly_crop_icon_fill_color">#29000000</color>
<color name="imgly_slider_track_color">#99000000</color>
<color name="imgly_text_input_background_color">#D9000000</color>
<color name="imgly_sticker_selection_background_color">#D9000000</color>
<color name="imgly_actionBar_background_color">#FFDDDDDD</color>
<color name="imgly_optionToolBar_background_color">#FFE3E3E3</color>
<color name="imgly_slider_thumb_color">#FFE3E3E3</color>
<color name="imgly_slider_background_color">#FFE3E3E3</color>
<color name="imgly_quickOptionToolBar_background_color">#4D000000</color>
<color name="imgly_dialog_background_color">#DDE3E3E3</color>
<color name="imgly_shuffle_icon_overlay_color">#DDE3E3E3</color>
<color name="imgly_text_on_image_background_color">#99000000</color>
<color name="imgly_sprite_handle_line_color">#80FFFFFF</color>
<color name="imgly_brush_preview_background_color">#DD1C1C1C</color>
<color name="imgly_icon_color_on_canvas">#FFFFFFFF</color>
<color name="imgly_icon_color_on_canvas_disabled">#66FFFFFF</color>
<color name="imgly_icon_color_secondary">#99000000</color>
<color name="imgly_camera_background_color">#FF000000</color>
<color name="imgly_camera_icon_color">#CCFFFFFF</color>
```






​All resource and style identifier can be overwritten. They have the prefix: `imgly_` e.g. `Imgly.`
​

### Change Layout

If you want to change the order of the ActionBar Buttons, you can open the `imgly_widget_actionbar.xml` in the layout editor and simply change the order of the xml elements.

> __Warning:__ Do NOT change layout IDs or element types (extensions of a type are fine), otherwise the app will crash with a `NullPointer` or a `TypeCast` exception!

If you want to change the ActionBar Button Style go to the specific Element, hold down the Command Key and click on the style attribute value `@style/Imgly.Editor.Header.Button.AcceptButton`
The Editor now jumps in the specific Style element in the `imgly_style.xml` file.
Now you can edit all style attributes. It's also possible to override the style attributes directly in the element node.

![Edit style]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_edit_style.png){: width="800px"}

If you want text instead of icons in the `ActionBar`, change the tag name in the button’s XML layout from ly.img.android.pesdk.ui.widgets.buttons.AcceptButton to ly.img.android.pesdk.ui.widgets.buttons.AcceptTextButton. The same works for the Cancel button, just use ly.img.android.pesdk.ui.widgets.buttons.CancelTextButton.
The styling for the buttons may look like the following example.

```xml
<ly.img.android.pesdk.ui.widgets.buttons.AcceptTextButton
    android:id="@+id/acceptButton"
    android:layout_width="wrap_content"
    android:layout_height="match_parent"
    android:gravity="center_vertical"
    android:textSize="12sp"
    android:textColor="@color/imgly_editor_text_color"
    android:background="@drawable/imgly_button"
    android:padding="8dp" />
```

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