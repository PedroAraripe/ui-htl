#!/usr/bin/env

NEW_FEATURE_NAME=$1;

cd "src/features/";

NEW_FEATURE_FOLDER="$NEW_FEATURE_NAME";
NEW_FEATURE_SUB_FOLDERS="api,components,composables,stores,types";

NEW_FEATURE_SUB_FOLDERS_TO_CREATE="$NEW_FEATURE_FOLDER/{$NEW_FEATURE_SUB_FOLDERS}"
mkdir -p $1/{api,components,composables,stores,types};

touch $1/index.ts; 