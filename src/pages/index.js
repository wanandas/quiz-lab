import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Form } from "@/component/Form";
import { TaskList } from "@/component/TaskList";

export default function Home() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("list");
    if (list) {
      setlist(JSON.parse(list));
    }
  }, []);

  const setListToLocalStorage = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  const handleSubmit = (description, dueDate) => {
    setlist((pre) => {
      setListToLocalStorage([
        ...pre,
        {
          id: Math.random().toString(36).substr(2, 9),
          description,
          dueDate,
          completed: false,
        },
      ]);

      return [
        ...pre,
        {
          id: Math.random().toString(36).substr(2, 9),
          description,
          dueDate,
          completed: false,
        },
      ];
    });
  };

  const handleDelete = (id) => {
    if (id === "all") {
      setlist((pre) => {
        setListToLocalStorage(pre.filter((item) => !item.completed));
        return pre.filter((item) => !item.completed);
      });
    } else {
      setlist((pre) => {
        setListToLocalStorage(pre.filter((item) => item.id !== id));
        return pre.filter((item) => item.id !== id);
      });
    }
  };

  const handleCompletion = (id) => {
    if (id === "all") {
      const allCompleted = list.every((item) => item.completed);
      if (allCompleted) {
        setlist((pre) => {
          setListToLocalStorage(
            pre.map((item) => ({ ...item, completed: false }))
          );
          return pre.map((item) => ({ ...item, completed: false }));
        });
        return;
      }

      setlist((pre) => {
        setListToLocalStorage(
          pre.map((item) => ({ ...item, completed: true }))
        );
        return pre.map((item) => ({ ...item, completed: true }));
      });
    }

    setlist((pre) => {
      setListToLocalStorage(
        pre.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          }

          return item;
        })
      );
      return pre.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      });
    });
  };

  const handleSorting = (type) => {
    const sorted = [...list].sort((a, b) =>
      a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
    );
    setlist(() => {
      setListToLocalStorage(sorted);
      return sorted;
    });
  };

  return (
    <>
      <Head>
        <title>TaskList</title>
        <meta name="description" content="TaskList" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Form onSubmit={(des, date) => handleSubmit(des, date)} />
        </div>

        <div>
          <TaskList
            data={list}
            onCompletion={handleCompletion}
            onDelete={handleDelete}
            onSorting={handleSorting}
          />
        </div>
      </main>
    </>
  );
}
