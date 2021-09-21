# Design for Each Task
Our primary principle for our app design is "simplicity". Because writing down items to-do might already be stressful, 
we want to reduce the amount of steps and elements required to complete each step. 

## Task 1: Add New Item to Empty List
### Design Ideas / Decisions
For this task, we considered creating a pop-up for each time that a new item were to be added. First, the user could click 
the add button, which is a plus sign on the button for simplicity, in the upper half of the screen, and then a pop-up would 
appear like a modal. There would be a text area to type in and a blinking cursor to allow the user to visualize where they 
would be typing. They could then click outside of the box to go back to the main screen and view the newly added item.
![Task 1 - Alternative Design Inspiration - First task using add button!](/design_files/task1a.png)

### Final Design
We decided to ditch the pop-up idea for creating a new item from an empty list (as well as the new items following)
because it seemed unnecessary and not suitable for the action. Instead, we begin with no new items and a line of text that 
indicates no new items have been added. A new item would be added by clicking the add button, as planned before, and
then the user could type directly next to a checkbox on the to-do list.
![Task 1 - Sketch of Final Design Decision!](/design_files/task1b.png)


## Task 2: Add New Item to Not-empty List
### Design Ideas / Decisions
The idea for this task is very similar to what we came up with in Task 1. The user could begin adding an item by clicking 
the add button which appears under all the existing items, in this case. Then, a blinking cursor would appear by the new 
checkbox to indicate that the user can begin typing the new item, along with a keyboard rising from the bottom of the screen. 
Tapping out of the item text area would take the cursor and keyboard away.

### Final Design
The final design for this task ended up being what we discussed in the Design Ideas / Decisions of this task, which is 
similar to that of Task 1. 
![Task 2 - Sketch of Final Design Decision!](/design_files/task2a.png)

## Task 3: Mark an Item as Completed
### Design Ideas / Decisions
Our idea for this task was that the user could click on the checkbox to the left of the item text, which shows a check 
in the box, to indicate that an item has been completed. Most scheduling apps or to-do lists have the same functionality 
for marking an item as complete, so we decided to incorporate it as well because it is intuitive to us to do so.

### Final Design
Our final design for this task is essentially the same for as we had planned, to reveal a check in the checkbox when indicating 
an item has been complete. However, we added a strike through to further emphasize that the item is complete and no longer 
needs the attention of the user, so that they can focus on the uncompleted items.
![Task 3 - Sketch of Final Design Decision!](/design_files/task3a.png)

## Task 4: Rename Item
### Design Ideas / Decisions
Our principle of simplicity applies in renaming the task. The inspiration of our design for renaming items comes from 
iPhone's default Notes app. For the Notes app, the user is able to tap on the area that they want to edit and edit the files. 
Similarly, we want the user to tap on a particular item and be able to start editing the item name.

![Task 4 - Apple Notes App Inspiration!](/design_files/task4-apple_notes.png "Apple Notes App Inspiration")

We also considered some alternative designs before deciding on the final one. For example, we considered conventional 
to-do list apps that provide additional options such as having the ability to change due dates or add additional notes to
the item (see image below). However, that will require us to create a pop-up modal for editing the item, which provides 
too many additional features that are not essential to our list of tasks.

![Task 4 - Alternative Design Inspiration - Edit Options!](/design_files/task4-editor_opts.png "Alternative Design Inspiration - Edit Options")

In addition, we considered alternative ways to enable the edit mode. We considered possibly having an edit button at the 
corner of the screen, which is typical in apps like Google Doc. However, this idea also complicated the process because 
after the edit button is clicked, we need to find a way to let the user pick the specific item that they want to edit.

![Task 4 - Alternative Design Inspiration - Google Doc Edit Button!](/design_files/task4-google_doc_edit.png "Alternative Design Inspiration - Google Doc Edit Button")

To perfect our design that is inspired by Apple's Notes app, we added a solid line below the edited text to signal the 
user which task is being edited. In addition, we darken and disable the checkbox to provide additional visual cues on 
the task of interest.

![Task 4 - Sketch of Final Design Decision!](/design_files/task4a.png "Design Decision for Task 4")

### Final Design
With all the aforementioned considerations in mind, our final design is shown in the following image:

![Task 4 - Final Design Flow Chart!](/design_files/task4-final.png "Final Design Flow Chart for Task 4")

To edit the task, the user needs to tap on any text area of an item, which is to the left of the corresponding checkbox.

In our example, after the user taps on "Text John" in image 1, the user will be able to see a line shown below the item 
that the user is editing. In addition, despite not being shown in image 2, there will be a cursor blinking at the end of
"Text John" and a keyboard should pop up on the mobile screen. Then, the user will be able to type their changes to this 
item.

After the user is satisfied with the change, they can press "return" on their keyboard or tap anywhere outside of the 
text input area to save the change. The final result is shown in image 3.

## Task 5: Filter and Display Only Uncompleted Items
### Design Ideas / Decisions
In order to display specific types of tasks, we quickly decided that the filter option should be a button located somewhere 
on the screen. However, we have considered various ways and locations to place the button. For example, a to-do list app 
puts the filter icon on the top right corner below the header. However, we discarded this idea because if we want to put 
the delete button next to the filter button (since they both need additional options), both buttons will be too crammed 
together.

![Task 5 - Alternative Design Inspiration - Filter Button Location!](/design_files/task5-filter_locatino.png "Alternative Design Inspiration - Filter Button Location")

We eventually chose the bottom of the screen over the top or the corners. In other typical mobile apps, the bottom often 
contains different buttons that switch the screen of app (for example, from "home" page to "notification" page on twitter. 
Since our app does not contain multiple screens/pages, we decided to utilize the space below for both the filter button 
and the delete button.

![Task 5 - Twitter Buttons at the Bottom of the Screen!](/design_files/task4-editor_opts.png "Twitter Buttons at the Bottom of the Screen")

In addition, initially, we decided to have both the text and the icon on the buttons. However, having both of them might 
provide redundant information, so we just used the icons in the end.

![Task 5 - Sketch of the Design Decision!](/design_files/task5b.png "Sketch of the Design Decision for task 6")

After the user taps on the "Filter" button, we want to provide different options for users in terms of selecting what to 
display. We decided to categorize the items based on whether they are completed or not, so we came up with 3 options: 
all, completed, and uncompleted. The options will be represented as a drop-up menu. To cancel filtering, the user just 
needs to tap anywhere besides the menu.

To provide visual cues that the user has pressed and selected certain option, when the user taps on an option, that 
option will become darken and its text color will turn from black to lighter color.

### Final Design
Our final design is broken down into the following 3 steps.

![Task 5 - Final Design Flow Chart!](/design_files/task5-final.png "Final Design Flow Chart for Task 5")

1. The users can press the filter button at any time (except when they are editing an item).
2. Once they press down the filter button, a drop-up menu will appear above the filter button (as seen in image 2).
3. Then, after the users press down on a specific option, which is "Uncompleted" in this case, the drop-up menu will 
4. automatically disappear, and the app will only display the "Uncompleted" items (shown in image 3).


## Task 6: Delete Completed Items
### Design Ideas / Decisions
We aimed to make the delete button and its options menu have the same design as the filter's.

Before finalizing the available options, we consider a possible delete mode that will allow the user hand-pick which item
they want to delete. Thus, initially, we have four options for delete: all, completed, uncompleted, and custom. The option
is also called "Select" instead of "Delete" (as seen from the sketch below).
Once the users choose the "custom" mode, they can tap on individual items to select the ones that they want to delete. The items 
that get tap will have a darken background or some kind of outline to indicate that they are selected. However, there are 
additional overheads such as how should the users cancel the selecting mode? how should the users delete the selected items? 
Eventually, we decided to abandon this feature because its functionality is not required, and adding it provides 
unnecessary complications. 
![Task 6 - Sketch of the Design Decision (when we are using select)!](/design_files/task6a.png "Sketch of the Design Decision (when we are using select)")

Our final available options for the delete button are the same as the filter button: all, completed, and uncompleted. 
In addition, because for our app, deletion is an unrecoverable action, we want to ask the users to confirm their deletion 
to delete certain items. We achieve this using a pop-up modal. We decided to darken the rest of the background when 
the modal appears so that the users can focus their attention on the warning modal itself. The users will then be able 
to confirm their delete decision by pressing "Delete", which has a red background for the button to emphasize the 
significance of this action. The users can also tap the darken area or press the "Cancel" button to cancel the action.

![Task 5 - Sketch of the Design Decision!](/design_files/task6b.png "Sketch of the Design Decision for Task 6")

### Final Design
Our final design is broken down into the following 4 steps:

![Task 6 - Final Design Flow Chart!](/design_files/task6-final.png "Final Design Flow Chart for Task 6")

1. The users can press the delete button at any time (except when they are editing an item).
2. Once they press down the delete button, a drop-up menu will appear above the delete button (as seen in image 2).
3. Then, after the users press down on a specific option, which is "Completed" in this case, the pop-up modal will appear, asking the user to confirm their actions (as shown in image 3)
4. After the user presses on "Delete", the completed task "Call Mom" will get deleted, thereby no longer appearing on the screen.


# User Testing
- For each task, describe the task to them. Then ask (1) What will you be looking for to achieve this task? 
- As they are walking through the task (and the screens for the task), ask them what they will do at each substep? 
- For example, at task1-2, we can say that "this is what the app looks like after you press the + sign. What will you do next?"

# Challenges We Faced
One challenge that we faced is about two buttons in a flex box spanning the same amount in the same row. The issue was 
occurring when we had added a dropup menu to one of the buttons (the issue did not arise when we did not have the dropups 
yet). For some unknown reason, this caused one button to be slightly wider than the other one beside it. We had set the 
flex-grow property of the dropup class to be 1, so we expected this to address the issue, but it didn’t. Thus, we resorted 
to adjusting the flex-grow by trial and error. We found that flex-grow: 1.1 fixed the issue enough to make the buttons look 
like the same width. Although it was not a fix from the root of the problem, it does not affect the experience and functionality 
of the app and fixes the ultimate issue of creating equal width buttons.

Another challenge we faced was importing and adjusting the icons from Google fonts. Unlike the Google font, which can be 
imported simply by adding an "@import" statement in the css file, adding the icons requires link an additional style sheet 
in each individual HTML file's header. Then, we had a lot of trouble readjusting the icon size because font-size surprisingly 
could not change the icon size, which is the typical approach from various tutorials. We eventually find a work-around where, 
instead of picking any size we want, we indicate a specific size in the class name of the icons. For example, 
"material-icons-outlined md-38" indicates that we want the 38px version of the icon stored on Google's server.

# Parts of the Design We're Most Proud Of
We are most proud of the drop-up menu selector and the pop-up modal for the filter and the delete button. We think that 
the drop-up menu selector is a non-intrusive way to present all the available options that the users have for either 
filtering or deleting. In addition, the pop-up modal provides a nice constraint on the users when they are deleting. 
By asking them to confirm their decision to delete, the users would be less likely to accidentally delete their items.
Finally, the red background of the "Delete" button in the modal is a nice touch. This is the only time that this red color 
has appeared in the app, thereby immediately grabbing the users' attention to pay attention before pressing the buttons. 

