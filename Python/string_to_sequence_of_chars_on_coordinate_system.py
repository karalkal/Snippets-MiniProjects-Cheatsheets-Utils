import requests
from bs4 import BeautifulSoup
'''
1. A table residing a a certain URL will contain chars like █ and ▀ and their coordinates. When placed on a coordinate system these will represent letters
2. The task is to get the table data from the URL, create a two-dimensional list and "draw" it on the screen.
3. Note, y axis data starts from bottom to top, i.e. as in a normal-life coordinate system

'''

# input_url = "https://docs.google.com/document/u/0/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub?pli=1"
# input_url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
input_url = input("Enter URL:")

# Make request
html_response = requests.get(url=input_url)

# Parse html into a BeautifulSoup object
soup = BeautifulSoup(html_response.text, "html.parser")


def convert_table_to_array_of_coordinates_and_chars(soup):
    result_arr = []

    rows_as_html = soup.find("table").findAll("tr")
    # exclude heading which is another <tr> in this dataset
    for tr in rows_as_html[1:]:
        row_data_as_list = list()

        for td in tr.find_all("td"):
            entry = td.get_text(strip=True)
            if entry.isdigit():
                entry = int(entry)
            row_data_as_list.append(entry)

        result_arr.append(row_data_as_list)
    return result_arr


def determine_size_of_matrix(x_char_y_arr):
    current_max_x, current_max_y = 0, 0
    for entry in x_char_y_arr:
        if entry[0] > current_max_x:
            current_max_x = entry[0]
        if entry[2] > current_max_y:
            current_max_y = entry[2]

    return current_max_x, current_max_y


def print_matrix(matrix):
    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            print(matrix[r][c], end="")
        print("\n")


def fill_matrix(x_char_y_arr, matrix):
    result = matrix
    for e in x_char_y_arr:
        x_to_overwrite, y_to_overwrite, char = e[0], e[2], e[1]
        result[y_to_overwrite][x_to_overwrite] = char
    # need to reverse the primary array as y coordinates are provided bottom to top
    return result[::-1]


x_char_y_arr = convert_table_to_array_of_coordinates_and_chars(soup)
max_x, max_y = determine_size_of_matrix(x_char_y_arr)

# create 2-dimensional list filled with spaces
matrix = [[" " for c in range(max_x + 1)] for r in range(max_y + 1)]

result = fill_matrix(x_char_y_arr, matrix)

print_matrix(result)
