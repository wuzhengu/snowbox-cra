package com.myapp;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication
{

    @Override
    public ReactNativeHost getReactNativeHost(){
        return new ReactNativeHost(this)
        {
            @Override
            public boolean getUseDeveloperSupport(){
                return BuildConfig.DEBUG;
            }

            @Override
            protected List<ReactPackage> getPackages(){
                @SuppressWarnings("UnnecessaryLocalVariable")
                List<ReactPackage> packages = new PackageList(this).getPackages();
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                return packages;
            }

            @Override
            protected String getJSMainModuleName(){
                return "index";
            }
        };
    }

    @Override
    public void onCreate(){
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    }
}
