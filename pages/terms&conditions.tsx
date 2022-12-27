import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { getTerms } from "../redux/actions/settings.action";
import { RootState } from "../utils/store";

export default function Terms() {
  const termsGet = useSelector((state: RootState) => state.getTerms);
  const { loading, error, terms }: any = termsGet;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTerms() as any);
  }, [dispatch]);
  return (
    <Layout>
      <div className="container m-auto p-4">
        {" "}
        <div
          dangerouslySetInnerHTML={{ __html: terms?.data[0].termsData }}
        ></div>
      </div>
    </Layout>
  );
}
