import {
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import {
  ModelCardModel,
  ModelCardType,
  ModelModel,
  TextType,
} from "../../../../models";
import { pageStyle } from "./pageStyle";
import { Text } from "../../updatedComponents";
import { Images, Lottie, StringsRepo } from "../../../../resources";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../../styles";
import { Fragment } from "react";
import { Chip } from "../../chip";
import {
  IStore,
  modelActions,
  rootActions,
  useAppDispatch,
} from "../../../../redux";
import { useSelector } from "react-redux";
import { modelHelper } from "../../../../helper/";

const ModelCard = (props: ModelCardModel) => {
  const { height } = useWindowDimensions();

  const dispatch = useAppDispatch();

  const { model } = useSelector((state: IStore) => state.modelReducer);

  const containerStyleByType = () => {
    return props.type === ModelCardType.vertical
      ? [pageStyle.verticalContainer, { height: height * 0.6 }]
      : props.type === ModelCardType.horizontal &&
          pageStyle.horizontalContainer;
  };

  const linerGradientColors = () => {
    if (props.type === ModelCardType.horizontal) {
      return style.color.gradient3;
    } else if (props.type === ModelCardType.vertical) {
      return style.color.gradient4;
    } else {
      return style.color.gradient1;
    }
  };

  const changeModelImage = (model: ModelModel | undefined, dispatch: any) => {
    dispatch(
      rootActions.showModal({
        title: StringsRepo.changeModelImage,
        lottie: Lottie.pizza,
        secondaryButtonTitle: StringsRepo.generatePhoto,
        secondaryButtonAction: async () => {
          dispatch(rootActions.hideModal());
          await dispatch(modelActions.generateModelPhoto(model));
        },
        buttonTitle: StringsRepo.fromGallery,
        buttonAction: () => {
          modelHelper
            .getImageFromGallery()
            .then(async (blob: Blob | undefined) => {
              if (blob) {
                dispatch(rootActions.hideModal());
                await dispatch(modelActions.updateModelPhoto(model, blob));
              }
            });
        },
      }),
    );
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.isDisabled || !props.onPress}
      style={[
        pageStyle.container,
        props.isSelected && { borderWidth: 2 },
        containerStyleByType(),
      ]}
    >
      <ImageBackground
        style={pageStyle.imageContainer}
        imageStyle={[
          pageStyle.imageStyle,
          !props.image && pageStyle.noImageStyle,
        ]}
        source={
          typeof props.image === "number"
            ? props.image
            : props.image === ""
              ? Images.imageGallery
              : { uri: props.image }
        }
      >
        {props.type !== ModelCardType.vertical && (
          <Fragment>
            {props.type === ModelCardType.horizontal &&
              model !== undefined &&
              model?.currentChallenge?.gym === 0 &&
              model?.currentChallenge?.food === 0 &&
              model?.currentChallenge?.freeTime === 0 && (
                <Chip
                  text={StringsRepo.newChallenge}
                  styles={pageStyle.chipChallenge}
                />
              )}
            {props.type === ModelCardType.horizontal && (
              <TouchableOpacity
                style={pageStyle.changeImageContainer}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => changeModelImage(model, dispatch)}
              >
                <Image
                  style={pageStyle.changeImage}
                  source={Images.imageGallery}
                />
              </TouchableOpacity>
            )}
            <View style={pageStyle.imageTextContainer}>
              <Text
                type={TextType.headingMD}
                style={pageStyle.title}
                numberOfLines={2}
              >
                {props.title}
              </Text>
              {props.type !== ModelCardType.small && (
                <Text
                  type={TextType.bodySM}
                  style={pageStyle.description}
                  numberOfLines={3}
                >
                  {props.description ??
                    "This model is to lit for a description. If you need more information feel bad because you dont know"}
                </Text>
              )}
            </View>
          </Fragment>
        )}
        <LinearGradient
          colors={linerGradientColors()}
          style={[
            pageStyle.gradient,
            props.type === ModelCardType.vertical && pageStyle.verticalGradient,
          ]}
        />
      </ImageBackground>
      {props.type === ModelCardType.vertical && (
        <View style={pageStyle.verticalTextContainer}>
          <Text
            type={TextType.headingL}
            style={pageStyle.verticalTitle}
            numberOfLines={2}
          >
            {props.title}
          </Text>

          <Text
            type={TextType.headingSM}
            style={pageStyle.verticalDescription}
            numberOfLines={4}
          >
            {props.description ??
              "This model is to lit for a description. If you need more information feel bad because you dont know"}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ModelCard;
