import { Filter } from "@mui/icons-material";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminLayout from "../../components/AdminLayout";
import Pagination from "../../components/pagination";
import { getApplyJob } from "../../redux/actions/jobs.Action";
import { RootState } from "../../utils/store";
import { checkImageUrl } from "../../utils/url";

export default function Applyed() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const listJob = useSelector((state: RootState) => state.jobsList);
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  const [all, setALl] = useState(true);
  const [reject, setReject] = useState(false);
  const [selected, setSelected] = useState(0);
  const [hold, setHold] = useState(false);

  const { loading, error, jobs }: any = listJob;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getApplyJob(
        page ? page : 1,
        size ? size : 10,
        selected == 0
          ? ""
          : selected == 1
          ? "selected"
          : selected == 2
          ? "rejected"
          : "hold"
      ) as any
    );
  }, [size, page, selected]);
  const url = checkImageUrl();

  const test = (id: any) => {
    setId(id);
  };

  const changePage = (val: any) => {
    setPage(val);
  };

  const changeSize = (value: any) => {
    console.log(value);
    setSize(value);
  };
  const updateCv = (id: any) => {
    console.log(
      id == 0 ? "selected" : id == 1 ? "rejected" : id == 2 ? "hold" : "hire"
    );
  };

  return (
    <AdminLayout title={"Applyed job"}>
      <div className="container m-auto">
        <div className="flex ">
          <div className="flex justify-between">
            {[
              { name: "All" },
              { name: "Selected" },
              { name: "Rejected" },
              { name: "Hold" },
            ].map((a: any, index: any) => (
              <div
                className={
                  selected == index
                    ? "px-2 c-text cursor-pointer font-bold"
                    : "px-2 cursor-pointer"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                {a.name}
              </div>
            ))}
          </div>
        </div>
        {jobs?.data.map((a: any, index: any) => (
          <>
            <div>
              <div key={index}>
                <div
                  onClick={() => {
                    test(index);
                    setShow(true);
                  }}
                  className="cursor-pointer"
                >
                  {a.fullName}
                </div>

                {show && id == index && (
                  <div
                    id="defaultModal"
                    className="bg-opacity-10 transition-opacity fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
                  >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full">
                      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white w-full">
                          <div className="text-center c-text">{a.position}</div>
                          <div className="flex flex-wrap justify-between">
                            <div> {a.fullName}</div>
                            <div>{a.email}</div>
                            <div>{a.phone} </div>
                          </div>
                          <div className="flex flex-wrap">
                            {[
                              { name: "Selected" },
                              { name: "Rejected" },
                              { name: "Hold" },
                              { name: "Hire" },
                            ].map((a: any, index: any) => (
                              <div className="px-2" key={index}>
                                <label htmlFor="selected">{a.name}</label>{" "}
                                <input
                                  type="radio"
                                  name="forwhat"
                                  value={index}
                                  onChange={() => updateCv(index)}
                                ></input>
                              </div>
                            ))}
                          </div>
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => setShow(false)}
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>

                      <div className="p-6 space-y-6">{a.intro}</div>
                      <iframe
                        src={`${url}/${a.cv}`}
                        height="100%"
                        width="100%"
                        style={{ height: "100vh" }}
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
        <Pagination
          pageSize={jobs?.size}
          setSize={changeSize}
          page={jobs?.page}
          setPage={changePage}
          totalData={jobs?.totaldata}
        ></Pagination>
      </div>
    </AdminLayout>
  );
}
