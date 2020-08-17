// @flow
import React from "react";
import { Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";
import {
  closableStackNavigatorConfig,
  defaultNavigationOptions,
} from "../../../navigation/navigatorConfig";
import StepHeader from "../../../components/StepHeader";
import { ScreenName } from "../../../const";
import OptInSelectToken from "./01-SelectToken";
import OptInConnectDevice from "./02-ConnectDevice";
import OptInValidation from "./03-Validation";
import OptInValidationError from "./03-ValidationError";
import OptInValidationSuccess from "./03-ValidationSuccess";

function OptInFlow() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        ...closableStackNavigatorConfig,
        gestureEnabled: Platform.OS === "ios",
      }}
    >
      <Stack.Screen
        name={ScreenName.AlgorandOptInSelectToken}
        component={OptInSelectToken}
        options={{
          headerTitle: () => (
            <StepHeader
              title={t("algorand.optIn.stepperHeader.selectToken")}
              subtitle={t("algorand.optIn.stepperHeader.stepRange", {
                currentStep: "1",
                totalSteps: "3",
              })}
            />
          ),
          headerLeft: () => null,
          headerStyle: {
            ...defaultNavigationOptions.headerStyle,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={ScreenName.AlgorandOptInConnectDevice}
        component={OptInConnectDevice}
        options={{
          headerTitle: () => (
            <StepHeader
              title={t("algorand.optIn.stepperHeader.connectDevice")}
              subtitle={t("algorand.optIn.stepperHeader.stepRange", {
                currentStep: "2",
                totalSteps: "3",
              })}
            />
          ),
        }}
      />
      <Stack.Screen
        name={ScreenName.AlgorandOptInValidation}
        component={OptInValidation}
        options={{
          headerTitle: () => (
            <StepHeader
              title={t("algorand.optIn.stepperHeader.verification")}
              subtitle={t("algorand.optIn.stepperHeader.stepRange", {
                currentStep: "3",
                totalSteps: "3",
              })}
            />
          ),
          headerLeft: null,
          headerRight: null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={ScreenName.AlgorandOptInValidationError}
        component={OptInValidationError}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={ScreenName.AlgorandOptInValidationSuccess}
        component={OptInValidationSuccess}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

const options = {
  headerShown: false,
};

export { OptInFlow as component, options };

const Stack = createStackNavigator();
