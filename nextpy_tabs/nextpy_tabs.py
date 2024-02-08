"""Welcome to Nextpy! This file outlines the steps to create a basic app."""
from xtconfig import config

import nextpy as xt

docs_url = "https://docs.dotagent.dev/nextpy/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(xt.State):
    """The app state."""

    pass


def index() -> xt.Component:
    return xt.box(
        xt.tabs(
        xt.tab_list(
            xt.tab("First Tab",class_name="mx-2 text-slate-600 text-xs font-bold",),
            xt.tab("Second Tab",class_name="mx-2 text-slate-600 text-xs font-bold",),
            xt.tab("Third Tab",class_name="mx-2 text-slate-600 text-xs font-bold",),
        ),
        xt.tab_panels(
            xt.tab_panel(xt.text("☝️ Welcome to the content that you can only see inside the first Tab.",class_name="text-slate-500")),
            xt.tab_panel(xt.text("✌️ Here’s content that’s only inside the second Tab.",class_name="text-slate-500")),
            xt.tab_panel(xt.text("💪 Here’s content that’s only inside the third Tab.",class_name="text-slate-500")),
            class_name="mt-3"
        ),
        class_name="text-white w-[35%]  pt-8 pl-4 "

        ),
        class_name="bg-slate-800 h-screen w-full"
    )


# Add state and page to the app.
app = xt.App()
app.add_page(index)
app.compile()
