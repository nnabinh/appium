module.exports = {
  en: [
    ["Home", "about-appium/intro.md"],
    ["About", ["about-appium",
      ["Introduction", "intro.md"],
      ["The Appium Clients", "appium-clients.md"],
      ["Supported Platforms", "platform-support.md"]]],
    ["Drivers", ["drivers",
      ["XCUITest (iOS)", "ios-xcuitest.md"],
      ["UIAutomation (iOS)", "ios-uiautomation.md"],
      ["UIAutomator (Android)", "android-uiautomator.md"],
      ["UIAutomator2 (Android)", "android-uiautomator2.md"],
      ["Espresso (Android)", "android-espresso.md"],
      ["Selendroid (Android)", "android-selendroid.md"],
      ["Windows", "windows.md"],
      ["Mac", "mac.md"],
      ["UIAutomation (iOS)", "ios-uiautomation.md"]]],
    ["Commands", ["commands",
      ["Status", "status.md"],
      ["Session", ["session",
        ["Create", "create.md"],
        ["Delete", "delete.md"],
        ["Get Session Capabilities", "get.md"],
        ["Go Back", "back.md"],
        ["Screenshot", "screenshot.md"],
        ["Timeouts", ["timeouts",
          ["Timeout", "timeout.md"],
          ["Implicit Wait", "implicit-wait.md"],
          ["Async Script", "async-script.md"],
        ]],
        ["Other", ["other",
          ["Get Orientation", "get-orientation"],
        ]],
      ]],
      ["Element", ["element",
        ["Find Element", "find-element.md"],
        ["Find Elements", "find-elements.md"],
        ["Actions", ["actions",
          ["Click", "click.md"],
          ["Send Keys", "send-keys.md"],
        ]],
        ["Attributes", ["attributes",
          ["Text", "text.md"],
        ]],
        ["Other", ["other",
          ["Submit", "submit.md"],
          ["Active Element", "active.md"],
        ]]
      ]],
      ["Interactions", ["interactions",
        ["Move To", "moveto.md"],
        ["Click", "click.md"],
        ["Button Down", "buttondown.md"],
        ["Button Up", "buttonup.md"],
      ]],
      ["Web", ["web",
        ["Window", ["window",
          ["Set Window", "set-window.md"],
          ["Close Window", "close-window.md"],
          ["Get Handle", "get-handle.md"],
          ["Get Handles", "get-handles.md"],
          ["Get Title", "title.md"],
          ["Get Window Size", "get-window-size.md"],
          ["Set Window Size", "set-window-size.md"],
          ["Get Window Position", "get-window-position.md"],
          ["Set Window Position", "set-window-position.md"],
          ["Maximize Window", "maximize-window.md"],
        ]],
        ["Navigation", ["navigation",
          ["Go to URL", "go-to-url.md"],
          ["Get URL", "url.md"],
          ["Back", "back.md"],
          ["Forward", "forward.md"],
          ["Refresh", "refresh.md"],
        ]],
        ["Storage", ["storage",
          ["Get All Cookies", "get-all-cookies.md"],
          ["Set Cookie", "set-cookie.md"],
          ["Delete Cookie", "delete-cookie.md"],
          ["Delete All Cookies", "delete-all-cookies.md"],
        ]],
        ["Frame", ["frame",
          ["Switch to Frame", "switch.md"],
          ["Switch to Parent Frame", "parent.md"],
        ]],
        ["Execute Async", "execute-async.md"],
        ["Execute", "execute.md"],
      ]]
    ]],
    ["Writing & Running Tests", ["writing-running-appium",
      ["Running Tests", "running-tests.md"],
      ["CLI Arguments", "server-args.md"],
      ["The --default-capabilities flag", "default-capabilities-arg.md"],
      ["Desired Capabilities", "caps.md"],
      ["Appium Command List", "appium-bindings.md"],
      ["Finding Elements", "finding-elements.md"],
      ["Mobile Web Testing", "mobile-web.md"],
      ["Reset Strategies", "reset-strategies.md"],
      ["Network Connection Guide", "network_connection.md"],
      ["Touch Actions", "touch-actions.md"],
      ["XCUITest Mobile Gestures", "ios-xctest-mobile-gestures.md"],
      ["iOS Pasteboard Guide", "ios-xctest-pasteboard.md"],
      ["iOS Predicate Guide", "ios_predicate.md"],
      ["iOS Touch ID Guide", "ios-touch-id.md"],
      ["UiSelector Guide", "uiautomator_uiselector.md"],
      ["Android Code Coverage Guide", "android_coverage.md"],
      ["Using Unicode with Appium", "unicode.md"],
      ["Troubleshooting", "troubleshooting.md"]]],
    ["Advanced", ["advanced-concepts",
      ["Migrating to XCUITest", "migrating-to-xcuitest.md"],
      ["Automating Hybrid Apps", "hybrid.md"],
      ["Using Selenium Grid with Appium", "grid.md"],
      ["Chromedriver Troubleshooting", "chromedriver.md"],
      ["Cross-domain iframes", "cross-domain-iframes.md"],
      ["Using ios-webkit-debug-proxy", "ios-webkit-debug-proxy.md"],
      ["Using a custom WDA server", "wda-custom-server.md"],
      ["The Event Timings API", "event-timings.md"],
      ["Setup for Parallel Testing", "parallel_tests.md"],
      ["The Settings API", "settings.md"]]],
    ["Contributing", ["contributing-to-appium",
      ["Running Appium from Source", "appium-from-source.md"],
      ["Developer Overview", "developers-overview.md"],
      ["Standard Gulp Commands", "gulp.md"],
      ["Appium Style Guide", "style-guide-2.0.md"],
      ["How to Write Docs", "how-to-write-docs.md"],
      ["Appium Package Structure", "appium-packages.md"],
      ["Credits", "credits.md"]]]
  ], "cn": [
  ]
};
