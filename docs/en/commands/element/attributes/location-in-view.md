# Get Element Location in View

Determine an element's location on the screen once it has been scrolled into view (mainly an internal command and not supported by all clients)
## Example Usage

```java
// Not supported
```

```python
# Not supported
```

```javascript
// Javascript
// webdriver.io example
let location = driver.getLocationInView("~SomeAccessibilityId");


// wd example
let element = await driver.elementByAccessibilityId("SomeAccessibilityID");
let location = await element.getLocationInView();

```

```ruby
# Not supported
```

```php
// Not supported
```

```csharp
// Not supported
```



## Client Docs



 * [Javascript (WebdriverIO)](http://webdriver.io/api/property/getLocationInView.html) 
 * [Javascript (WD)](https://github.com/admc/wd/blob/master/lib/commands.js#L2189) 




## Support

### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | 9.3+ | 1.6.0+ | All |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | 8.0 to 9.3 | All | All |
| Android | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | ?+ | 1.6.0+ | All |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | 4.2+ | All | All |
| Mac | [Mac](/docs/en/drivers/mac.md) | ?+ | 1.6.4+ | All |
| Windows | [Windows](/docs/en/drivers/windows.md) | 10+ | 1.6.0+ | All |

### Appium Clients 

|Language|Support|
|--------|-------|
|[Java](https://github.com/appium/java-client/releases/latest)| All |
|[Python](https://github.com/appium/python-client/releases/latest)| All |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| All |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| All |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All |
|[PHP](https://github.com/appium/php-client/releases/latest)| All |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| All |

## HTTP API Specifications

### Endpoint

`GET /wd/hub/session/:session_id/elements/:element_id/location_in_view`

### URL Parameters

None

### JSON Parameters

None

### Response

|name|type|description|
|----|----|-----------|
| x | number | X coordinate |
| y | number | Y coordinate |

## See Also

* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation_in_view)
