import React from "react";
import SchemaForm, { Field, FormButtonGroup, Submit, Reset } from "@uform/next";
import "@alifd/next/dist/next.css";

export type CreateChannelFormGatheredInfo = {
  mode: "manual" | "auto";
  id: string;
  name?: string;
  description?: string;
  published_at?: string;
  thumbnail?: string;
};

interface CreateChannelFormProps {
  onSubmit?: (channel: CreateChannelFormGatheredInfo) => void;
}

function CreateChannelForm({ onSubmit }: CreateChannelFormProps) {
  return (
    <SchemaForm
      labelCol={4}
      wrapperCol={12}
      effects={($, { setFieldState }) => {
        $("onFieldChange", "isAuto").subscribe(isAuto => {
          [
            "name",
            "description",
            "published_at",
            "thumbnail",
            "country"
          ].forEach(field => {
            setFieldState(field, state => {
              state.visible = !isAuto.value;
            });
          });
        });
      }}
      onSubmit={channel => {
        // if validation error happened, channel will be an array of errors.
        if (!Array.isArray(channel)) {
          onSubmit &&
            onSubmit({
              ...channel,
              mode: channel.isAuto ? "auto" : "manual"
            });
        }
      }}
    >
      <Field
        type="boolean"
        title="自动模式"
        name="isAuto"
        default={true}
        x-props={{ "data-testId": "is-auto" }}
      ></Field>
      <Field
        type="string"
        required
        title="YouTube ID"
        name="id"
        x-props={{ "data-testId": "youtube-id" }}
      ></Field>
      <Field
        type="string"
        required
        title="频道名称"
        name="name"
        x-props={{ "data-testId": "name" }}
      ></Field>
      <Field
        type="string"
        title="频道描述"
        name="description"
        x-component="textarea"
        x-props={{ "data-testId": "description" }}
      ></Field>
      <Field
        type="string"
        title="头像URL"
        name="thumbnail"
        x-props={{ "data-testId": "thumbnail-url" }}
      ></Field>
      <Field
        type="date"
        title="创建时间"
        name="published_at"
        x-props={{ "data-testId": "created-at" }}
      ></Field>
      <Field
        type="string"
        title="国家"
        name="country"
        x-props={{ "data-testId": "country" }}
      ></Field>
      <FormButtonGroup offset={7}>
        <Submit></Submit>
        <Reset></Reset>
      </FormButtonGroup>
    </SchemaForm>
  );
}

export default CreateChannelForm;
