---
layout: guides/content
title: &title Logging # title as shown in the menu and

menuitem: *title
order: 0
platform: ios
version: v8
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


With version 7 we introduced a new way of dealing with errors, warnings and such.
We created the `MasterLogger` class, which will take care of managing child loggers, and dispatching events.
The PhotoEditor SDK will use the logger to provide important information. It is up to you whether these information will be shown
to the user or handled by your code.

There are four types of log-events that are, ordered from high to low priority: `error`, `warn`, `info`, and `debug`.
The `MasterLogger` has a property called `logLevel`, that will determine the lowest level of log-event that should be dispatched.
The default log-level is `warn`, meaning that only warnings and errors will be logged. To disable logging, set the log level to `none`.
Each logger must implement the `LoggerProtocol`,
that contains a method for each of these types. We provide a default logger, that will simply log to the debug console.
In case you want to add a custom logger, create a new class, implement the `LoggerProtocol` and call the `add` method of the `MasterLogger`.
For more details, take a look at the [`MasterLogger`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/MasterLogger.html) documentation.

Here is an example for a simple log with warning as log level.

```MasterLogger.warn("This is my important warning !")```
