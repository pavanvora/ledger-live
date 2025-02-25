import React, { memo } from "react";
import { Linking } from "react-native";
import { Trans } from "react-i18next";
import SettingsRow from "../../../components/SettingsRow";
import { urls } from "../../../config/urls";

function LiveReviewRow() {
  return (
    <SettingsRow
      event="LiveReviewRow"
      title={<Trans i18nKey="settings.about.liveReview.title" />}
      desc={<Trans i18nKey="settings.about.liveReview.android" />}
      onPress={() => {
        Linking.openURL(urls.playstore);
      }}
    />
  );
}

export default memo(LiveReviewRow);
