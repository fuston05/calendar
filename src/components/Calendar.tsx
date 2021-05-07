// Calendar JSX File
import React from "react";
import { InlineWidget } from "react-calendly";
import "./calendar.css";

export const Calendar = () => {
  return (
    <div id="calCont">
      <InlineWidget url="https://calendly.com/scott-a-fuston/schedule-some-work" />

      {/* <table style={{ border: "1px solid black" }}>
        <tr>
          <th colSpan={7}>Calendar</th>
        </tr>
        <tr>
          <td style={{ backgroundColor: 'lightGray'}}>30</td>
          <td style={{ backgroundColor: 'lightGray'}}>31</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>

        <tr>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>

        <tr>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
        </tr>

        <tr>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
        </tr>

        <tr>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td style={{ backgroundColor: 'lightGray'}}>1</td>
          <td style={{ backgroundColor: 'lightGray'}}>2</td>
          <td style={{ backgroundColor: 'lightGray'}}>3</td>
          <td style={{ backgroundColor: 'lightGray'}}>4</td>
        </tr>
      </table> */}
    </div>
  );
};
