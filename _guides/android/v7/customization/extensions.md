---
layout: guides/content
title: &title Extensions # title as shown in the menu and

menuitem: *title
order: 7
platform: android
version: v7
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

Our SDK is extremely customizable and extendable. If you want to add your own items, views or panels you can do it with extending our base classes.

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
      UiStateMenu.Event.ENTER_TOOL,
      UiStateMenu.Event.LEAVE_TOOL,
      UiStateMenu.Event.LEAVE_AND_REVERT_TOOL
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

### Locked custom Items
To make certain items unavailable (lock an item) to the user, but let them still be visible you have to extend the regarding class following this example:

First you have to create your own `MyImageStickerItem` class extending `ImageStickerItem` like this:

```java
public class MyImageStickerItem extends ImageStickerItem {
 
    public MyImageStickerItem(String id, @StringRes int name, ImageSource previewSource) {
        super(id, name, previewSource);
    }
 
    public MyImageStickerItem(String id, String name, ImageSource previewSource) {
        super(id, name, previewSource);
    }
 
    @Override
    public int getLayout() {
        return R.layout.imgly_list_item_sticker;
    }
 
    @Override
    public boolean isSelectable() {
        return false;
    }
 
    @Override
    public int describeContents() {
        return 0;
    }
 
    public boolean isPurchased(){
        // Todo: Your code here!
        return false; 
    }
 
    @Override
    public void writeToParcel(Parcel dest, int flags) {
        super.writeToParcel(dest, flags);
    }
 
    @NonNull
    @Override
    public Class<? extends DataSourceListAdapter.DataSourceViewHolder> getViewHolderClass() {
        return MyStickerViewHolder.class;
    }
 
    protected MyImageStickerItem(Parcel in) {
        super(in);
    }
 
    public static final Creator<MyImageStickerItem> CREATOR = new Creator<MyImageStickerItem>() {
        @Override
        public MyImageStickerItem createFromParcel(Parcel source) {
            return new MyImageStickerItem(source);
        }
 
        @Override
        public MyImageStickerItem[] newArray(int size) {
            return new MyImageStickerItem[size];
        }
    };
}
```

Second you have to create also a `ViewHolder` implementation for this item following this example `MyStickerViewHolder`:

```java
@android.support.annotation.Keep
public class MyStickerViewHolder extends DataSourceListAdapter.DataSourceViewHolder<MyImageStickerItem, Bitmap> implements View.OnClickListener {
 
    public final View contentHolder;
    @Nullable
    private final TextView textView;
 
    @Nullable
    private final ImageSourceView imageView;
 
    private boolean isPurchased = false;
 
    @android.support.annotation.Keep
    public DefaultViewHolder(@NonNull View v) {
        super(v);
        textView = v.findViewById(R.id.label);
        imageView = v.findViewById(R.id.image);
        contentHolder = v.findViewById(R.id.contentHolder);
 
        contentHolder.setOnClickListener(this);
    }
 
    @Override
    protected Bitmap createAsyncData(MyImageStickerItem abstractItem) {
        return abstractItem.hasStaticThumbnail() ? null : abstractItem.getThumbnailBitmap(Math.round(64 * uiDensity));
    }
 
    @Override
    protected void bindData(MyImageStickerItem data) {
        itemView.setContentDescription(data.getName());
 
        isPurchased = data.isPurchased();
 
        if (textView != null) {
            textView.setText(data.getName());
        }
        if (imageView != null) {
            if (data.hasStaticThumbnail()) {
                imageView.setAlpha(1f);
                imageView.setImageSource(data.getThumbnailSource());
            } else {
                imageView.setAlpha(0f);
            }
        }
    }
 
    @Override
    protected void bindData(MyImageStickerItem data, Bitmap bitmap) {
        if (imageView != null) {
            imageView.setAlpha(1f);
            imageView.setImageBitmap(bitmap);
        }
    }
 
    @Override
    public void setSelectedState(boolean selected) {
        contentHolder.setSelected(selected);
    }
 
    public void onClick(View v) {
        dispatchSelection();
        if (isPurchased) {
             dispatchOnItemClick();
        } else {
             // Todo: Your code here!
        }
    }
}
```

For further information regarding extending classes, have a look here (direct to an doc article elaborating on extending classes).

### Predefined Text Sticker
If you want to add predefined Text Stickers, you have to add a custom tool that places the text and closes itself. There are two ways you can achieve this effect by using the following example code for the custom tool `ToolPanel`:
```java
public class ToolAsButton extends AbstractToolPanel {
 
public static String ID = "ToolAsButton";
 
public ToolAsButton(@NonNull StateHandler stateHandler)
 
{ super(stateHandler); }
 
@Override
protected void onAttached(Context context, @NonNull View panelView)
 
{ super.onAttached(context, panelView); AssetConfig assetConfig = getStateHandler().getSettingsModel(AssetConfig.class); String monthName = (String) android.text.format.DateFormat.format("MMMM", new Date()); String text = "Employee of the Month: " + monthName; FontAsset fontAsset = assetConfig.getAssetById(FontAsset.class, "imgly_font_open_sans_bold"); TextStickerConfig currentConfig = new TextStickerConfig(text, Paint.Align.LEFT, fontAsset, Color.GRAY, Color.TRANSPARENT); getStateHandler().getSettingsModel(LayerListSettings.class).addLayer(new TextLayerSettings(currentConfig).setPosition(0.5, 0.05, 0, 0.05)); getStateHandler().getStateModel(UiStateMenu.class).openMainMenu(); }
 
@Override
protected int getLayoutResource()
 
{ return R.layout.imgly_panel_tool_menu; }
 
@NonNull
@Override
protected Animator createShowAnimator(@NonNull View panelView)
 
{ return new AnimatorSet(); }
 
@NonNull
@Override
protected Animator createExitAnimator(@NonNull View panelView) { return new AnimatorSet(); }
 
@Override
protected void onDetached() {
 
}
}
```

In `MainActivity` you need to add the panel to the main menu:
```
UiState.addPanel(new PanelData(ToolAsButton.ID, ToolAsButton.class));
settingsList.getSettingsModel(UiConfigMainMenu.class).getToolList().add(new ToolItem(ToolAsButton.ID, "Button Name", ImageSource.create(R.drawable.imgly_icon_tool_text)));
```

The second way to do this with a serialization file. You can select an image and then load the serialization and attach it to the image. In the serialization file you can change the text itself as well as position, color and size. The serialization file is readable on every platform we offer.
```json
{"version":"3.0.0","meta":
{"platform":"android","version":"6.2.7","createdAt":"2019-03-19T14:39:24+01:00"},
"image": {"type":"image/png","width":1440,"height":2560},
"operations":[{"type":"transform","options":{"start":{"x":0.0,"y":0.0},"end":{"x":1.0,"y":1.0},"rotation":0.0}},

{"type":"orientation","options":{"rotation":0,"flipVertically":false,"flipHorizontally":false}},

{"type":"adjustments","options":
{"brightness":0.0,"saturation":0.0,"contrast":0.0,"exposure":0.0,"shadows":0.0,"highlights":0.0,"clarity":0.0,"gamma":0.0,"blacks":0.0,"temperature":0.0,"whites":0.0}},

{"type":"sprite","options":
{"sprites":[{"type":"text","options":{"text":"Employee of the Month [month here]","fontSize":0.029,"fontIdentifier":"imgly_font_open_sans_bold","alignment":"left",
"color":{"rgba":[0.5,0.5,0.5,1.0]},
"backgroundColor":{"rgba":[0.0,0.0,0.0,0.0]},
"position":{"x":0.31,"y":0.047},
"rotation":0.0,"maxWidth":0.52,"flipHorizontally":false,"flipVertically":false}},
 
 {"type":"text","options":
 {"text":"","fontSize":0.1,"fontIdentifier":"imgly_font_open_sans_bold","alignment":"center",
 "color":{"rgba":[1.0,1.0,1.0,1.0]},
 "backgroundColor":{"rgba":[0.0,0.0,0.0,0.0]},
 "position":{"x":0.5,"y":0.5},
 "rotation":0.0,"maxWidth":1.0000000474974513E-4,"flipHorizontally":false,"flipVertically":false}}]}}]}
```